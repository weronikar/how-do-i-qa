require 'rails_helper'
feature 'Country', js: true do
    context 'Test without let!' do
        scenario 'Countries exist' do
            create(:country)
            create(:country, name: "France", code: "FR")
            visit '/pages/test_6'
            expect(page).to have_content ("Poland | PL")
            expect(page).to have_content ("France | FR")
        end   
        scenario 'Countries do not exist' do
            visit '/pages/test_6'
            expect(page).to have_content ("No data")
        end   
    end


# 2nd option
    context 'Tests using let!' do
        let!(:country){
            create(:country)
            create(:country, name: "France", code: "FR")
        }
        scenario 'Countries exist' do
            visit '/pages/test_6'
            expect(page).to have_content ("Poland | PL")
            expect(page).to have_content ("France | FR")
        end   
    end

# 3rd option
    context 'No countries created' do
        scenario 'Countries do not exist' do
            visit '/pages/test_6'
            expect(page).to have_content ("No data")
        end   
    end
end   