# frozen_string_literal: true

def name_transform1(line)
  # Преобразует строку из формата "Фамилия Имя Отчество"
  # В формат "Имя Отчество Фамилия" и возвращает новую строку
  words = line.split(' ')
  # Если нет отчества:
  return words.reverse.join(' ') if words.length == 2

  # Если есть отчество
  [words[1], words[2], words[0]].join(' ')
end

def name_transform2(line)
  # Преобразует строку из формата "Фамилия Имя Отчество"
  # В формат "Фамилия И.О." и возвращает новую строку
  words = line.split(' ')
  # Если нет отчества:
  return "#{words[0]} #{words[1][0]}." if words.length == 2

  # Если есть отчество
  "#{words[0]} #{words[1][0]}.#{words[2][0]}."
end
