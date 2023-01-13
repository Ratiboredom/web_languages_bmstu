# frozen_string_literal: true

require_relative 'main'

f1 = ->(x) { Math.log(x) / x }
puts("Интеграл первой функции: #{intg(0.1, 1, 10_000, f1).round(6)}")
puts("Интеграл второй функции: #{intg(0, 2, 10_000) { |x| Math.sin(x) * Math.cos(x) }.round(6)}")
