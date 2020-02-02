require 'rails_helper'
feature 'Click next', js: true do
  scenario 'Go to the next page' do
    visit '/pages/test_0'
    expect(page).to have_content('Test #0')
    click_on('Next')
    expect(page).to have_content('Test #1')
  end
end