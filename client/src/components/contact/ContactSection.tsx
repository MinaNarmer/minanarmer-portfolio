import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, Mail, MapPin, Clock, Github, Linkedin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Form schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { t } = useTranslation();
  const { toast } = useToast();
  
  // Form setup
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });
  
  // Submit handler
  const mutation = useMutation({
    mutationFn: (values: ContactFormValues) => {
      return apiRequest("POST", "/api/contact", values);
    },
    onSuccess: () => {
      toast({
        title: t("contact.success"),
        description: t("contact.successMessage"),
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: t("contact.error"),
        description: error.message || t("contact.errorMessage"),
        variant: "destructive"
      });
    }
  });
  
  function onSubmit(values: ContactFormValues) {
    mutation.mutate(values);
  }
  
  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-light-color dark:bg-dark-color">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-dark-color dark:text-light-color code-bracket">
          {t("contact.title")}
        </h2>
        <p className="text-lg text-dark-color dark:text-light-color-darker max-w-xl mx-auto">
          {t("contact.description")}
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("contact.form.name")}</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder={t("contact.form.namePlaceholder")} 
                        {...field} 
                        className="bg-white dark:bg-dark-color-deeper"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("contact.form.email")}</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder={t("contact.form.emailPlaceholder")} 
                        type="email"
                        {...field} 
                        className="bg-white dark:bg-dark-color-deeper"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("contact.form.subject")}</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder={t("contact.form.subjectPlaceholder")} 
                        {...field} 
                        className="bg-white dark:bg-dark-color-deeper"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("contact.form.message")}</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder={t("contact.form.messagePlaceholder")} 
                        {...field} 
                        rows={5}
                        className="bg-white dark:bg-dark-color-deeper"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full bg-primary-color hover:bg-primary-color-dark"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? t("contact.form.sending") : t("contact.form.send")}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Form>
        </div>
        
        {/* Contact Information */}
        <div className="lg:pl-8">
          <Card className="shadow-lg border border-light-color-darker dark:border-dark-color">
            <CardContent className="p-8">
              <h3 className="font-display text-xl font-semibold mb-6 text-dark-color dark:text-light-color">
                {t("contact.connectTitle")}
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="text-primary-color text-xl mt-1">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-dark-color dark:text-light-color">
                      {t("contact.email")}
                    </h4>
                    <p className="text-dark-color dark:text-light-color-darker">
                      {t("contact.emailValue")}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="text-primary-color text-xl mt-1">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-dark-color dark:text-light-color">
                      {t("contact.phone")}
                    </h4>
                    <p className="text-dark-color dark:text-light-color-darker">
                      {t("contact.phoneValue")}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="text-primary-color text-xl mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-dark-color dark:text-light-color">
                      {t("contact.location")}
                    </h4>
                    <p className="text-dark-color dark:text-light-color-darker">
                      {t("contact.locationValue")}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="text-primary-color text-xl mt-1">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-dark-color dark:text-light-color">
                      {t("contact.availability")}
                    </h4>
                    <p className="text-dark-color dark:text-light-color-darker">
                      {t("contact.availabilityValue")}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div>
                <h4 className="font-medium text-dark-color dark:text-light-color mb-4">
                  {t("contact.followMe")}
                </h4>
                <div className="flex space-x-4 rtl:space-x-reverse">
                  <a 
                    href="https://github.com/MinaNarmer/" 
                    className="w-10 h-10 rounded-full bg-light-color-darker dark:bg-dark-color flex items-center justify-center text-dark-color dark:text-light-color hover:bg-primary-color hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/minayousef/" 
                    className="w-10 h-10 rounded-full bg-light-color-darker dark:bg-dark-color flex items-center justify-center text-dark-color dark:text-light-color hover:bg-primary-color hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
