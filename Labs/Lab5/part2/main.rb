def is_special_palindrome(str)
    # checks if uppercase chars and numbers in a given string form palindrome
    new_str = ''
    for i in 0..str.length - 1 do
        if str[i].match?(/[A-Z]/) or str[i].match?(/\d/)
            new_str += str[i]
        end
    end
    puts new_str
    return new_str == new_str.reverse
end

puts is_special_palindrome('12TA5Ab5Ax ljssdfsddf To12')