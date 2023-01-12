# frozen_string_literal: true

def func(x)
  polynome = x**3 + x**2 - x
  Math.tan(polynome) - Math.sin(polynome.abs) + polynome**2
end
