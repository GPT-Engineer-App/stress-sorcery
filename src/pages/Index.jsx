import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Menu, Paw, Heart, Info, Facebook, Twitter, Instagram, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [catFact, setCatFact] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const facts = [
      "Cats have over 20 vocalizations, including the purr, meow, and chirp.",
      "A group of cats is called a clowder.",
      "Cats spend 70% of their lives sleeping.",
      "The first cat in space was a French cat named Felicette in 1963.",
      "Cats can jump up to 6 times their length.",
    ];
    setCatFact(facts[Math.floor(Math.random() * facts.length)]);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 bg-opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2ZmZiIvPgo8cGF0aCBkPSJNMzYgMTJIMjRhMiAyIDAgMCAwLTIgMnYyNGEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWMTRhMiAyIDAgMCAwLTItMnoiIGZpbGw9IiNmMGYwZjAiLz4KPC9zdmc+')]">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Paw className="h-8 w-8 text-purple-600" />
                <span className="ml-2 text-xl font-bold text-gray-800">CatWorld</span>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">Breeds</Button>
              <Button variant="ghost">Care</Button>
              <Button variant="ghost">About</Button>
            </div>
            <div className="flex items-center sm:hidden">
              <Button variant="ghost" onClick={() => setMenuOpen(!menuOpen)}>
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
        {menuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Button variant="ghost" className="w-full justify-start">Home</Button>
              <Button variant="ghost" className="w-full justify-start">Breeds</Button>
              <Button variant="ghost" className="w-full justify-start">Care</Button>
              <Button variant="ghost" className="w-full justify-start">About</Button>
            </div>
          </div>
        )}
      </nav>

      <div className="relative bg-cover bg-center h-screen flex items-center justify-center overflow-hidden" style={{backgroundImage: "url('https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-50" style={{ transform: `translateY(${scrollY * 0.5}px)` }}></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center"
        >
          <motion.h1 
            className="text-7xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            All About Cats
          </motion.h1>
          <motion.p 
            className="text-2xl text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Discover the fascinating world of felines
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Button variant="outline" size="lg" className="mt-8 bg-white text-black hover:bg-gray-200">
              Explore Now
            </Button>
          </motion.div>
        </motion.div>
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        >
          <ChevronDown className="w-10 h-10 text-white" />
        </motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Cat Fact of the Day</h2>
          <p className="text-xl text-gray-600 italic">&ldquo;{catFact}&rdquo;</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center"><Heart className="mr-2 text-red-500" /> Characteristics of Cats</CardTitle>
                <CardDescription>What makes cats unique?</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Independent nature</li>
                  <li>Excellent hunters with sharp claws and teeth</li>
                  <li>Flexible bodies and quick reflexes</li>
                  <li>Keen senses, especially hearing and night vision</li>
                  <li>Communicate through vocalizations, body language, and scent</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center"><Paw className="mr-2 text-purple-600" /> Popular Cat Breeds</CardTitle>
                <CardDescription>Some well-known cat breeds around the world</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Siamese</li>
                  <li>Persian</li>
                  <li>Maine Coon</li>
                  <li>Bengal</li>
                  <li>Scottish Fold</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Cat Breed Showcase</h2>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {["Siamese", "Persian", "Maine Coon", "Bengal", "Scottish Fold"].map((breed, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <img src={`https://placekitten.com/300/200?image=${index + 1}`} alt={breed} className="w-full h-48 object-cover rounded-t-lg" />
                      <CardHeader>
                        <CardTitle className="text-center">{breed}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-center text-gray-600">Click to learn more about {breed} cats</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>

        <Card className="mt-16 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl"><Info className="mr-2 text-blue-500" /> Fascinating Cat Facts</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {[
                { question: "How long do cats sleep?", answer: "Cats sleep an average of 15 hours a day, and some can sleep up to 20 hours in a 24-hour period." },
                { question: "How fast can a cat run?", answer: "The average house cat can run at a top speed of about 30 mph over short distances." },
                { question: "Do cats sweat?", answer: "Cats only sweat through their paw pads. They primarily cool themselves by panting." },
                { question: "How many teeth do cats have?", answer: "Adult cats have 30 teeth, while kittens have 26 temporary teeth." },
                { question: "Can cats see in complete darkness?", answer: "Cats can't see in complete darkness, but they can see in light six times dimmer than what humans need to see." }
              ].map((item, index) => (
                <AccordionItem value={`item-${index + 1}`} key={index}>
                  <AccordionTrigger className="text-lg font-semibold">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>

      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">CatWorld</h2>
              <p className="text-gray-300">Your source for all things feline</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Breeds</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Care</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors"><Facebook /></a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors"><Twitter /></a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors"><Instagram /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2023 CatWorld. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
