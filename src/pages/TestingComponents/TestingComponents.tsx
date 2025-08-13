import LayoutComponents from "@/components/layout/LayoutComponents";

import { Button } from "@/components/ui/button";

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

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Usuário tem que ter mais de 2 caracteres.",
  }),
});

export default function Landing() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit() {
    console.log("Boa");
  }

  return (
    <LayoutComponents>
      {/* Botões */}
      <div className="flex flex-col w-3/4">
        <h1 className="text-white">Botões</h1>
        <span className="flex gap-2">
          <Button variant="default">Default</Button>
          <Button disabled>Disabled</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="terciary">Terciary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </span>
      </div>

      {/* Forms */}
      <div className="flex flex-col w-3/4">
        <h1 className="text-white">Forms</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome de usuário</FormLabel>
                  <FormControl>
                    <Input placeholder="Insira seu nome" {...field} />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>
                    Não possuí uma conta?{" "}
                    <a className="text-accent hover:text-primary no-underline">
                      Criar uma conta.
                    </a>
                  </FormDescription>
                </FormItem>
              )}
            />
            <Button type="submit" variant="terciary" className="w-full">
              Enviar
            </Button>
          </form>
        </Form>
      </div>
    </LayoutComponents>
  );
}
