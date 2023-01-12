def func(x)
    Math.tan(x**3 + x**2 - x) - Math.sin((x**3 + (x**2 - x).abs).abs) + (x**3 + x**2 - x)**2
end

puts func(1.57)