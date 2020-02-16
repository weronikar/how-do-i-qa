require 'rails_helper'
feature 'Checking if the data got updated after clicking the button', js: true do
    scenario 'Clicking on the button' do 
        visit '/pages/test_4'
        click_link 'Click me to fire an AJAX call'
        expect(page).to have_content ('This is answer from the server') 
    end   
      
end 