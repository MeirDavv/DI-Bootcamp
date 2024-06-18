# Instructions :
# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
# The user can query the circle for either its radius or diameter.

import math

class Circle:
    def __init__(self, radius : int | float = None, diameter : int | float = None) -> None:
        if radius is not None:
            self.radius = radius
            self.diameter = 2 * radius
        elif diameter is not None:
            self.diameter = diameter
            self.radius = diameter / 2
        else:
            raise ValueError("Either radius or diameter needs to be provided")

# Other abilities of a Circle instance:

# Compute the circle’s area

    def circle_area(self) -> int | float:
        return round((self.radius ** 2) * math.pi, 2)
    
# Print the attributes of the circle - use a dunder method

    def __str__(self) -> str:
        return f"The circle's diameter is {self.diameter}. Its radius is {self.radius}"
    
    def __repr__(self) -> str:
        return f"The circle's diameter is {self.diameter}. Its radius is {self.radius}"


# Be able to add two circles together, and return a new circle with the new radius - use a dunder method
    
    def __add__(self, other_circle : 'Circle') -> 'Circle':
        new_radius = self.radius + other_circle.radius
        new_circle = Circle(radius=new_radius)
        return new_circle
    
# Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
    
    def __gt__(self, other_circle : 'Circle') -> 'Circle':
        return self.radius > other_circle.radius
    
# Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method
    
    def __eq__(self, other_circle : 'Circle') -> 'Circle':
        return self.radius == other_circle.radius
    
# Be able to put them in a list and sort them

    def __le__(self, other_circle : 'Circle') -> 'Circle':
        return self.radius <= other_circle.radius
    
if __name__ == '__main__':
    circle1 = Circle(30)
    circle2 = Circle(50)
    circle3 = Circle(40)
    
    print (circle1.circle_area())

    print (circle1)

    circle4 = circle1 + circle2
    print(circle4)

    print (circle2 > circle1)

    print (circle2 == circle3)

    circles = [circle1, circle2, circle3, circle4]
    print(circles)

    circles.sort()
    print(circles)

# Bonus (not mandatory) : Install the Turtle module, and draw the sorted circles

    import turtle

    s = turtle.getscreen()
    t = turtle.Turtle()
    t.backward(300)
    for circle in circles:
        t.circle(circle.radius)
        t.forward(150)
