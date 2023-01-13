# frozen_string_literal: true

def select_upper_and_nums(str)
  str.chars.select { |ch| ch.match?(/[A-Z]/) or ch.match?(/\d/) }.join
end

def special_palindrome?(str)
  # checks if uppercase chars and numbers in a given string form palindrome
  new_str = select_upper_and_nums(str)
  return false if (str == '') || (new_str == '')
  new_str == new_str.reverse
end
