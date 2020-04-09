FactoryBot.define do
  factory :country, class: SomeModule::Country do
    name {"Poland"}
    code {"PL"}
  end
end