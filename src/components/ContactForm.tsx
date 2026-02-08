import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, Building2, User, Mail, Phone, PackageCheck, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { PRODUCT_CATEGORIES, ContactFormData } from '@/lib/index';
import { cn } from '@/lib/utils';

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  companyName: z.string().min(2, "Company name is required for B2B enquiries"),
  email: z.string().email("Please enter a valid corporate email address"),
  phone: z.string().min(10, "Please enter a valid contact number"),
  productRequirement: z.string().min(1, "Please select a product category"),
  message: z.string().min(10, "Please provide more details about your requirement"),
});

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      companyName: '',
      email: '',
      phone: '',
      productRequirement: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // In a production environment, this would integrate with a backend service
      // or a mailer API to send to gaphealthcare1@gmail.com
      console.log('Enquiry submitted to gaphealthcare1@gmail.com:', data);
      
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast.success('Enquiry Sent Successfully', {
        description: "Thank you for your interest. Our procurement team will contact you within 24 hours.",
      });
      
      form.reset();
    } catch (error) {
      toast.error('Submission Failed', {
        description: "We encountered an error. Please try again or contact us directly at +91 6376467587.",
      });
    }
  };

  return (
    <div className={cn("bg-card border border-border rounded-xl shadow-lg p-6 md:p-8", className)}>
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-primary mb-2">Request a Bulk Quote</h3>
        <p className="text-muted-foreground">
          Fill out the form below for institutional pricing and supply reliability details.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" /> Full Name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} className="bg-background" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-primary" /> Company Name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Healthcare Institution / Industrial Unit" {...field} className="bg-background" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" /> Work Email
                  </FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="procurement@company.com" {...field} className="bg-background" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" /> Phone Number
                  </FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="+91 XXXXX XXXXX" {...field} className="bg-background" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="productRequirement"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <PackageCheck className="w-4 h-4 text-primary" /> Product Category
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select the type of gloves required" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {PRODUCT_CATEGORIES.map((category) => (
                      <SelectItem key={category.id} value={category.name}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-primary" /> Requirement Details
                </FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Please specify quantities, sizes, and any specific certifications required for your institution."
                    className="min-h-[120px] bg-background"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full py-6 text-lg font-semibold bg-primary hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                Processing Enquiry...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="w-5 h-5" /> Request a Quote
              </span>
            )}
          </Button>
          
          <p className="text-center text-xs text-muted-foreground mt-4">
            By submitting this form, you agree to our terms of service regarding B2B supply enquiries.
          </p>
        </form>
      </Form>
    </div>
  );
}
