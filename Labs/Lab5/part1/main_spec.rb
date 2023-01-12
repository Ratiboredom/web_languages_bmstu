# frozen_string_literal: true

require_relative 'main'

RSpec.describe 'My function' do
  # used desmos.com to check proper value
  it 'returns 0 if 0 is given' do
    y = func(0)
    expect(y).to be_within(0.001).of(0)
  end
  it 'returns proper number' do
    y = func(0.618)
    expect(y).to be_within(0.001).of(0)
  end
end
