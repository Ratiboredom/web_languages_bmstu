# frozen_string_literal: true

require_relative 'main'
require 'faker'

Faker::Config.locale = 'ru'
Faker::Config.random = Random.new

RSpec.describe 'function name_transform1:' do
  it 'works with basic faked name' do
    name = Faker::Name.name
    puts name
    expect(name_transform1(name).split[-1]).to eq(name.split[0])
    expect(name_transform1(name).split[0]).to eq(name.split[1])
  end
  it 'works with double-name' do
    name = 'Семенова Анна-София Антоновна'
    puts name
    expect(name_transform1(name).split[-1]).to eq(name.split[0])
    expect(name_transform1(name).split[0]).to eq(name.split[1])
  end
end

RSpec.describe 'function name_transform2:' do
  it 'works with basic faked name' do
    name = Faker::Name.name
    puts name
    expect(name_transform2(name)[-1]).to eq('.')
    expect(name_transform2(name).split[0]).to eq(name.split[0])
    expect(name_transform2(name).split[1][0]).to eq(name.split[1][0])
  end
  it 'works with double-name' do
    name = 'Семенова Анна-София Антоновна'
    puts name
    expect(name_transform2(name).split[0]).to eq(name.split[0])
    expect(name_transform2(name).split[1][0]).to eq(name.split[1][0])
  end
end
