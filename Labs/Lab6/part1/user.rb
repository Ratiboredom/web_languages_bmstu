# frozen_string_literal: true

require_relative 'main'

epsilon1 = (10**-3).to_f
epsilon2 = (10**-4).to_f

result1 = log_integral(epsilon1)
result2 = log_integral(epsilon2)

# puts("Вычисление с точностью 0.001 дало результат #{result1[0]}, потребовалось итераций - #{result1[1]}")
# puts("Вычисление с точностью 0.0001 дало результат #{result2[0]}, потребовалось итераций - #{result2[1]}")

puts "Вычисление с точностью #{epsilon1} дало результат #{result1.round(4)}, итераций: #{(1/epsilon1).to_i}"
puts "Вычисление с точностью #{epsilon2} дало результат #{result2.round(5)}, итераций: #{(1/epsilon2).to_i}"