require 'rails_helper'
feature 'Testing my first form', js: true do
    scenario 'fill the form - all options must be filled in' do
        visit '/pages/test_2'
        fill_in('Example textfield', with: 'TEST')
        check('Example checkbox')
        select('Opt 2', from: 'Example select')
        choose('Example radiobutton opt 2')
        click_button 'Submit'
        #$stderr.write 'Press enter to continue'
        #$stdin.gets
        expect(page).to have_content ('Submitted text: TEST')
        expect(page).to have_content ('Checkbox checked: 1')
        expect(page).to have_content ('Select option picked: Opt 2')
        expect(page).to have_content ('Radio option picked: opt 2')
    end
    scenario 'Displaying flash message - error' do
        visit '/pages/test_2'
        click_button 'Submit'
        expect(page).to have_content ('Some data was missing')
    end
    scenario 'Displaying flash message - success' do
        visit '/pages/test_2'
        fill_in('Example textfield', with: 'TEST')
        check('Example checkbox')
        select('Opt 2', from: 'Example select')
        choose('Example radiobutton opt 2')
        click_button 'Submit'
        expect(page).to have_content ('Submitted successfully')
    end
    scenario 'Correct message on submitted data section without submition' do
        visit '/pages/test_2'
        expect(page).to have_content ('Data will appear here after submission.') 
    end
  end
