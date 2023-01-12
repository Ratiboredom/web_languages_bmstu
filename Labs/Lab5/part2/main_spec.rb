# frozen_string_literal: true

require_relative 'main'

RSpec.describe 'special_palindrome? function:' do
  it 'returns false when empty string given' do
    expect(special_palindrome?('')).to eq(false)
  end
  it 'can return true' do
    expect(special_palindrome?('15asdf ABBTBBA ii 51')).to eq(true)
  end
  it 'can return false' do
    expect(special_palindrome?('Abc Def')).to eq(false)
  end
end
