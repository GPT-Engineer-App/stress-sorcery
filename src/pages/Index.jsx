import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Menu, Paw, Heart, Info } from "lucide-react";

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
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

      <div className="relative bg-cover bg-center h-96" style={{backgroundImage: "url('https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center">All About Cats</h1>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        </div>

        <Card className="mt-12 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center"><Info className="mr-2 text-blue-500" /> Interesting Cat Facts</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>How long do cats sleep?</AccordionTrigger>
                <AccordionContent>
                  Cats sleep an average of 15 hours a day, and some can sleep up to 20 hours in a 24-hour period.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How fast can a cat run?</AccordionTrigger>
                <AccordionContent>
                  The average house cat can run at a top speed of about 30 mph over short distances.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Do cats sweat?</AccordionTrigger>
                <AccordionContent>
                  Cats only sweat through their paw pads. They primarily cool themselves by panting.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">CatWorld</h2>
              <p className="mt-2">Your source for all things feline</p>
            </div>
            <div>
              <p>&copy; 2023 CatWorld. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
