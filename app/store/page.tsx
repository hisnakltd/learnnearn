import { Metadata } from 'next';
import Image from 'next/image';
import { ShoppingBag, CheckCircle, Smartphone, DollarSign, Clock, Users, Star, ArrowRight, Download, CreditCard, MessageCircle, Mail, Phone, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Amazon KDP Course - Earn Passive Income | LEARN N\' EARN BLOG',
  description: 'Learn how to create and publish books on Amazon KDP using AI. Start earning $100-$1000 monthly passive income.',
};

export default function StorePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-red-500 hover:bg-red-600 text-white px-6 py-2 text-lg font-semibold animate-pulse">
              🔥 LIMITED TIME OFFER
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent leading-tight">
              Discover the Secret to Earning Passive Income Every Month
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-medium">
              — Even While You Sleep 💤
            </p>
            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 my-8 rounded-r-lg">
              <p className="text-xl text-gray-800 leading-relaxed">
                What if I told you there's a way to earn <span className="font-bold text-green-600">$100 to $1,000 per month</span>… 
                by writing and publishing short, helpful books — even if you're not a writer?
              </p>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              Let me show you how it's possible… and how you can start right from your smartphone or tablet.
            </p>
          </div>
        </div>
      </section>

      {/* Course Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              {/* Course Image */}
              <div className="flex justify-center mb-8">
                <div className="relative w-80 h-96 md:w-96 md:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/amazon-course.png"
                    alt="How to Use AI to Create Short Books and Publish on Amazon KDP and Kobo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Permit Me To Introduce:
              </h2>
              <div className="bg-gradient-to-r from-green-600 to-blue-600 p-8 rounded-2xl text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  "How to Use AI to Create Short Books and Publish on Amazon KDP and Kobo"
                </h3>
                <p className="text-xl opacity-90">
                  This is not just a course. It's a complete guide to building a real passive income business.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 border-green-200 hover:border-green-400 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-green-700">
                    <CheckCircle className="h-8 w-8" />
                    No Writing Experience Needed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    You don't need to be a professional writer. Learn to use powerful (but free) AI tools to create books in hours — not weeks.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-blue-700">
                    <Smartphone className="h-8 w-8" />
                    Works on Your Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    You don't even need a laptop. Everything can be done from your smartphone or tablet.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Passive Income Explanation */}
      <section className="py-16 bg-gradient-to-r from-green-100 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 flex items-center justify-center gap-3">
                <DollarSign className="h-10 w-10 text-green-600" />
                What is Passive Income?
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Passive income is what many call <span className="font-bold text-green-600">"make money while you sleep."</span><br />
                You do the work once, and it continues to pay you for life.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Example Calculation:</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <span className="text-lg">15 books × $30/month each</span>
                  <span className="text-2xl font-bold text-green-600">= $450/month</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <span className="text-lg">30 books × $30/month each</span>
                  <span className="text-2xl font-bold text-blue-600">= $900/month</span>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <p className="text-lg font-semibold text-yellow-800">
                    Or imagine just one book that becomes a best-seller! 🌟
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl font-semibold text-gray-800">
                This is real. It's happening. And you can start today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Amazon KDP Business Is For You, If You Are:
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "🎓", text: "Students & recent graduates" },
                { icon: "👩‍👧‍👦", text: "Stay-at-home moms/dads" },
                { icon: "🏢", text: "9–5 employees" },
                { icon: "💻", text: "Freelancers & gig workers" },
                { icon: "🙋‍♂️", text: "Unemployed individuals" },
                { icon: "🔍", text: "Job seekers & part-timers" },
                { icon: "📣", text: "Coaches, bloggers & marketers" },
                { icon: "🌍", text: "Retirees & digital nomads" },
                { icon: "💰", text: "Anyone looking for freedom & passive income" }
              ].map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <p className="font-medium text-gray-700">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-r from-red-100 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">
              💰 How Much Is It?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Most courses like this cost between ₦30,000 to ₦150,000.
            </p>
            
            <div className="bg-white p-8 rounded-2xl shadow-2xl mb-8 border-4 border-red-500">
              <div className="mb-6">
                <span className="text-2xl text-gray-500 line-through">₦10,000</span>
                <span className="text-6xl font-bold text-red-600 ml-4">₦2,000</span>
                <span className="text-xl text-gray-600 ml-2">only</span>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                That's less than the cost of eating out. But it could change your entire financial future.
              </p>
              <Badge className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 text-lg">
                🎯 90% OFF - Limited Time
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              📘 What You'll Learn Inside:
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "How to create your Amazon KDP & Kobo accounts",
                "How to get USD/GBP/EUR bank account and add your bank account on Amazon or Kobo",
                "How to format your book for Kindle using Google docs on your smartphone",
                "How to use AI tools to generate content — fast",
                "How to upload your book to Amazon KDP and Kobo and go live globally",
                "How royalties work and how much you earn per sale",
                "Secrets of bestselling books — and how to write one",
                "Pen name secrets and how they help boost credibility",
                "How to craft irresistible book descriptions and titles",
                "How to use Amazon tools like KDP Select and Sponsored Ads"
              ].map((item, index) => (
                <Card key={index} className="border-l-4 border-green-500 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 font-medium">{item}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Friendly */}
      <section className="py-16 bg-gradient-to-r from-blue-100 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 flex items-center justify-center gap-3">
              <Smartphone className="h-10 w-10 text-blue-600" />
              No Laptop? No Problem.
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-xl text-gray-700 mb-6">
                This course is designed for real people — people who may not have expensive devices or software.
              </p>
              <p className="text-lg text-gray-600">
                All you need is your smartphone or tablet and a willingness to take action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Shield className="h-12 w-12 text-yellow-400" />
              <h2 className="text-4xl font-bold">30-Day Money-Back Guarantee</h2>
            </div>
            
            <div className="bg-white/10 backdrop-blur p-8 rounded-2xl mb-8">
              <p className="text-xl leading-relaxed mb-6">
                If you enroll in our Amazon KDP course today and complete the training, and it does not deliver the value, clarity, and results we've outlined — we will give you a full refund. No stress. No questions asked. No guilt-tripping.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                We're not here to take your money and vanish. Hisnak Ltd is a legally registered company in Nigeria, and we stand by our word, our platform, and the integrity of this program.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                We didn't create this course just to sell — we created it to transform. You deserve results. You deserve clarity. And you deserve a platform that works.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Try the program. Go through the training. Apply the lessons. And if within 30 days you truly feel like this course didn't give you what we promised, we'll honor your refund request — respectfully and professionally.
              </p>
              
              <p className="text-xl font-bold text-yellow-300">
                So don't let doubt hold you back. Take the leap. Secure your access now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">🛒 Ready to Start?</h2>
              <p className="text-xl mb-8 opacity-90">
                This is your opportunity to tap into a global digital economy that pays creators month after month.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Online Payment */}
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardHeader>
                  <CardTitle className="text-white text-center text-2xl">
                    💳 Pay Online (Recommended)
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Button 
                    size="lg" 
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg py-4 mb-4"
                    asChild
                  >
                    <a 
                      href="https://paystack.com/buy/how-to-use-ai-to-create-short-books-and-publish-on-am-bxosrl" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <CreditCard className="h-6 w-6" />
                      Buy Now - ₦2,000
                    </a>
                  </Button>
                  <p className="text-sm opacity-80">Instant access after payment</p>
                </CardContent>
              </Card>

              {/* Bank Transfer */}
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardHeader>
                  <CardTitle className="text-white text-center text-2xl">
                    🏦 Bank Transfer
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-white/20 p-4 rounded-lg">
                      <p className="font-semibold mb-2">PROVIDUS BANK</p>
                      <p>Account Name: HISNAK LTD</p>
                      <p>Account Number: 9603947938 (NGN)</p>
                    </div>
                    <div className="bg-white/20 p-4 rounded-lg">
                      <p className="font-semibold mb-2">CARBON MFB</p>
                      <p>Account Name: HISNAK LTD</p>
                      <p>Account Number: 9031063507 (NGN)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold mb-6">Submit Payment Proof:</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30" asChild>
                  <a href="https://wa.me/2349070724260" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp: 09070724260
                  </a>
                </Button>
                <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30" asChild>
                  <a href="mailto:admin@hisnak.com" className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Email: admin@hisnak.com
                  </a>
                </Button>
                <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30" asChild>
                  <a href="https://t.me/+2347059912997" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Telegram: 07059912997
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Footer */}
      <section className="py-12 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">⚡ Don't wait. This offer may not be available forever.</h2>
          <p className="text-xl mb-6">✨ Your future is waiting — one short book at a time.</p>
          <Button 
            size="lg" 
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-xl px-8 py-4"
            asChild
          >
            <a 
              href="https://paystack.com/buy/how-to-use-ai-to-create-short-books-and-publish-on-am-bxosrl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ArrowRight className="h-6 w-6" />
              Get Started Now
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}