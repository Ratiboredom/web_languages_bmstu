# frozen_string_literal: true

require_relative 'main'

puts 'Введите последовательность строк по образцу:'
puts " 'Фамилия Имя Отчество'  (для завершения ввода повторно нажмите Enter)"

lines = []
str = gets.chomp

until str == ''
  lines.push(str)
  str = gets.chomp
end

puts 'Исходная последовательность:'
lines.each { |line| puts line }

print "\n------------------------------------\n\n"
puts "Скорректированная последовательность: \n"

lines.each { |line| puts name_transform1(line), name_transform2(line) }
