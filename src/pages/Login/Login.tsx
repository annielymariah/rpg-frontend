import LayoutComponents from "@/components/layout/RootLayout";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function LogIn() {
  
    const loginSchema = z.object({
    email: z.string().min(2, {
      message: "Email tem que ter mais de 2 caracteres.",
    }),
    password: z
      .string()
      .min(6, "Senha deve ter pelo menos 6 caracteres")
      .max(50, "Senha muito longa"),
  })

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log(values);
  }

  return (
    <LayoutComponents>
      <div className="mx-auto max-w-md w-full">
        <h1 className="w-full text-center text-3xl text-white mb-4">Login</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 md:px-0 px-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Insira seu email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Insira sua senha"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormDescription className="flex justify-center gap-1">
              Não possuí uma conta?
              <Link to="/cadastro" className="text-accent hover:text-primary no-underline hover:cursor-pointer">
                Criar uma conta.
              </Link>
            </FormDescription>

            <Button type="submit" className="w-full">
              Enviar
            </Button>
          </form>
        </Form>
      </div>
    </LayoutComponents>
  );
}
