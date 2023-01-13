# frozen_string_literal: true

require 'minitest/autorun'
require_relative 'main'

# Inttegral tester
class Test < Minitest::Test
  def test_first
    result = log_integral(0.001)
    assert_in_delta 0.3862943611199, result, 0.001, 'Неправильный результат'
  end

  def test_second
    result = log_integral(0.0001)
    assert_in_delta 0.3862943611199, result, 0.0001, 'Неправильный результат'
  end
end
