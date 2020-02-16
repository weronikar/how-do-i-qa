require 'rails_helper'
feature 'Page with basic js', js: true do
    scenario 'Get the table raw you want' do
        visit '/pages/test_3'
       # correct 1a: first(:xpath, '//table//tr').click
       # correct 1b: first('table tr').click
       # correct 1c: all('table tr').first.click
       # correct 2: all('table tr').last.click       
        
        first('table tr').click
        expect(page).to have_css 'table tr.highlighted'
   
    end
  end