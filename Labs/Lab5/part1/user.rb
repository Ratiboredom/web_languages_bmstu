# frozen_string_literal: true

require_relative 'main'

print('Введите аргумент x: ')
y = func(gets.chomp.to_f)
puts("y = #{y.round(6)}")
