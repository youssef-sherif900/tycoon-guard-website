"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">اتصل بنا</h2>
          <div className="h-1 w-24 bg-secondary mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">تواصل معنا</h3>
            <div className="space-y-6">
              <Card className="border-primary/20 hover:border-secondary transition-all">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="flex-shrink-0 p-3 bg-primary rounded-lg">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">للاتصال المباشر</p>
                    <a
                      href="tel:01000006169"
                      className="text-xl font-bold text-foreground hover:text-secondary transition-colors"
                    >
                      01000006169
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-secondary transition-all">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="flex-shrink-0 p-3 bg-primary rounded-lg">
                    <MessageCircle className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">واتساب</p>
                    <a
                      href="https://wa.me/201008379046"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-foreground hover:text-secondary transition-colors"
                    >
                      01008379046
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-secondary transition-all">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="flex-shrink-0 p-3 bg-primary rounded-lg">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">البريد الإلكتروني</p>
                    <a
                      href="mailto:info@tycoonguard.com"
                      className="text-xl font-bold text-foreground hover:text-secondary transition-colors"
                    >
                      info@tycoonguard.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-secondary transition-all">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="flex-shrink-0 p-3 bg-primary rounded-lg">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">العنوان</p>
                    <p className="text-lg font-bold text-foreground">الإسكندرية - برج العرب - الساحل الشمالى - القاهره</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">أرسل رسالة</h3>
              <form className="space-y-6">
                <div>
                  <Input placeholder="الاسم" className="border-primary/20 focus:border-secondary" />
                </div>
                <div>
                  <Input type="tel" placeholder="رقم الهاتف" className="border-primary/20 focus:border-secondary text-right placeholder:text-right " />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="البريد الإلكتروني"
                    className="border-primary/20 focus:border-secondary"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="رسالتك"
                    rows={5}
                    className="border-primary/20 focus:border-secondary resize-none"
                  />
                </div>
                <Button type="submit" className="w-full bg-secondary text-primary hover:bg-secondary/90 text-lg">
                  إرسال
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
