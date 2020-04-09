# require 'rails_helper'
# feature 'Signing up', js: true do
#     scenario 'Users sign up without factory' do
#         visit '/users/sign_in'
#         click_link 'Sign up'
#         expect(page).to have_content ('8 characters minimum')
#         fill_in('Email', with: 'weronika.rudowicz@netguru.com')
#         fill_in('Password', with: 'haslo1234')
#         fill_in('Password confirmation', with: 'haslo1234')      
#         click_button 'Sign up'
#         $stderr.write 'Press enter to continue'
#         $stdin.gets
#     end    
#end 

require 'rails_helper'
# 1st 
feature 'Signing in', js: true do
   
   scenario 'Users sign in Valid' do
       visit '/users/sign_in'
       user = create(:user, email: "wr@netguru.com", password: "haslo1234")
       fill_in('Email', with: user.email)
       fill_in('Password', with: user.password)
       click_button 'Log in'
       visit '/pages/test_5'
       expect(page).to have_content (user.email)
    end   
    scenario 'Users sign in Invalid wrong password' do
        visit '/users/sign_in'
        user = create(:user, email: "wr@netguru.com", password: "haslo1234")
        fill_in('Email', with: user.email)
        fill_in('Password', with: 'wrongpassword')
        click_button 'Log in'
        expect(page).to have_content ("Invalid Email or password")
     end   
     scenario 'Users sign in Invalid wrong user' do
        visit '/users/sign_in'
        user = build(:user, email: "wronguser@netguru.com", password: "password")
        fill_in('Email', with: user.email)
        fill_in('Password', with: user.password)
        click_button 'Log in'
        expect(page).to have_content ("Invalid Email or password")
     end   
#2nd 
   scenario 'Users sign up with factory_test_5' do
       visit '/users/sign_in'
       user = create(:userw)
       fill_in('Email', with: user.email)
       fill_in('Password', with: user.password)
       click_button 'Log in'
       visit '/pages/test_5'
       expect(page).to have_content (user.email)
    end
    scenario 'Users sign in Invalid wrong password with factory_test_5' do
      visit '/users/sign_in'
      user = create(:userw)
      fill_in('Email', with: user.email)
      fill_in('Password', with: 'wrongpassword')
      click_button 'Log in'
      expect(page).to have_content ("Invalid Email or password")
   end   
   scenario 'Users sign in Invalid wrong user with factory_test_5' do
      visit '/users/sign_in'
      user = build(:userw, email: "wronguser@netguru.com")
      fill_in('Email', with: user.email)
      fill_in('Password', with: user.password)
      click_button 'Log in'
      expect(page).to have_content ("Invalid Email or password")
   end
end