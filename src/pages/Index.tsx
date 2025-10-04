import { Coffee, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-coffee.jpg";
import beansImage from "@/assets/coffee-beans.jpg";
import cafeImage from "@/assets/cafe-interior.jpg";

const Index = () => {
  const menuItems = [
    { name: "Espresso", price: "$3.50", description: "Rich and bold single shot" },
    { name: "Cappuccino", price: "$4.50", description: "Creamy foam perfection" },
    { name: "Latte", price: "$4.75", description: "Smooth and silky" },
    { name: "Cold Brew", price: "$4.25", description: "Smooth, never bitter" },
    { name: "Mocha", price: "$5.00", description: "Chocolate meets espresso" },
    { name: "Flat White", price: "$4.50", description: "Velvety microfoam art" },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Coffee className="h-6 w-6 text-coffee-medium" />
            <span className="font-playfair text-xl font-bold text-coffee-dark">Brew Haven</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-foreground hover:text-coffee-medium transition-colors">Home</a>
            <a href="#about" className="text-foreground hover:text-coffee-medium transition-colors">About</a>
            <a href="#menu" className="text-foreground hover:text-coffee-medium transition-colors">Menu</a>
            <a href="#contact" className="text-foreground hover:text-coffee-medium transition-colors">Contact</a>
          </div>
          <Button variant="default" size="sm">Order Now</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-coffee-dark/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-cream mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Crafted with Passion,
            <br />
            Served with Love
          </h1>
          <p className="text-xl md:text-2xl text-warm-beige mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            Experience the finest artisan coffee in a warm, inviting atmosphere
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <Button size="lg" className="bg-primary hover:bg-coffee-dark text-primary-foreground">
              Explore Menu
            </Button>
            <Button size="lg" variant="outline" className="border-cream text-cream hover:bg-cream hover:text-coffee-dark">
              Visit Us
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-warm-gradient">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-coffee-dark">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Brew Haven, we believe coffee is more than just a beverage—it's an experience. 
                Since 2020, we've been sourcing the finest beans from around the world, roasting them 
                to perfection, and serving them in an atmosphere that feels like home.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every cup tells a story. From the farmers who grow our beans to the baristas who 
                craft your drink, we're committed to excellence at every step.
              </p>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-coffee-medium">100%</div>
                  <div className="text-sm text-muted-foreground">Organic Beans</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-coffee-medium">15+</div>
                  <div className="text-sm text-muted-foreground">Brew Methods</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-coffee-medium">5★</div>
                  <div className="text-sm text-muted-foreground">Rated</div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={beansImage} 
                alt="Fresh coffee beans" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-coffee-dark mb-4">
              Our Menu
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handcrafted beverages made with premium beans and artisan techniques
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {menuItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-playfair text-xl font-semibold text-coffee-dark">
                      {item.name}
                    </h3>
                    <span className="text-lg font-bold text-coffee-medium">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="default">
              View Full Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-coffee-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={cafeImage} 
                alt="Brew Haven cafe interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-8">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold">
                Visit Us Today
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Location</div>
                    <div className="text-cream">123 Coffee Street, Brew District, CA 90210</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Hours</div>
                    <div className="text-cream">Mon-Fri: 7AM - 8PM</div>
                    <div className="text-cream">Sat-Sun: 8AM - 9PM</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <div className="text-cream">(555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-cream">hello@brewhaven.com</div>
                  </div>
                </div>
              </div>
              <Button size="lg" className="bg-cream text-coffee-dark hover:bg-warm-beige">
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-coffee-dark text-cream py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Coffee className="h-6 w-6" />
                <span className="font-playfair text-xl font-bold">Brew Haven</span>
              </div>
              <p className="text-warm-beige">
                Crafting exceptional coffee experiences since 2020.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-warm-beige hover:text-cream transition-colors">Home</a>
                <a href="#about" className="block text-warm-beige hover:text-cream transition-colors">About</a>
                <a href="#menu" className="block text-warm-beige hover:text-cream transition-colors">Menu</a>
                <a href="#contact" className="block text-warm-beige hover:text-cream transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="text-warm-beige">
                Stay connected for updates, special offers, and behind-the-scenes content.
              </div>
            </div>
          </div>
          <div className="border-t border-warm-beige/20 pt-8 text-center text-warm-beige">
            <p>&copy; 2024 Brew Haven. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
