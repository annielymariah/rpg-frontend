import LayoutComponents from "@/components/layout/LayoutComponents";
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

  function onSubmit() {
    console.log("Atualizar Login");
  }

  return (
    <LayoutComponents>
      <div className="flex flex-col w-1xl">
        <h1 className="text-white w-full flex justify-center">Login</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
              Não possuí uma conta?{" "}
              <a className="text-accent hover:text-primary no-underline">
                Criar uma conta.
              </a>
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
