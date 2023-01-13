# frozen_string_literal: true

def log_integral(accuracy, right = 2.0, left = 1.0)
  step = accuracy / 10 # rectangle width
  area = 0.0
  loop do
    area += Math.log(left) * step
    left += step
    break if left >= right
  end
  area
end
