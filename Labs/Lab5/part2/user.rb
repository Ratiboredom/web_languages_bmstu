# frozen_string_literal: true

require_relative 'main'

print('Enter string: ')
str = gets.chomp

if special_palindrome?(str)
  puts true
  puts 'Uppercase chars and numbers of the given string form palindrome'
else
  puts false
  puts 'Uppercase chars and numbers of the given string do not form palindrome:'
end
puts select_upper_and_nums(str)
