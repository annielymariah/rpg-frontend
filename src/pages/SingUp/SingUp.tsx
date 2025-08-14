import LayoutComponents from "@/components/layout/LayoutComponents";
import {
  Form,
  FormControl,
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
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const registerSchema = z
  .object({
    fullname: z
      .string()
      .min(3, "Nome completo deve ter pelo menos 3 caracteres")
      .max(100, "Nome muito longo"),
    email: z
      .string()
      .min(2, "Email deve ter mais de 2 caracteres")
      .max(100, "Email não pode ter mais de 100 caracteres")
      .email("Por favor, insira um email válido"),
    masterConfirm: z
    .boolean()
    .default(false),
    registrationNumber: z
      .string()
      .regex(/[0-9]/, "Matrícula deve conter apenas números")
      .min(9, "Matrícula deve ter 9 caracteres")
      .max(9, "Matrícula deve ter 9 caracteres")
      .optional(),
    phone: z
      .string()
      .min(11, "Telefone deve ter 11 dígitos (com DDD)")
      .max(15, "Número muito longo"),
    password: z
      .string()
      .min(6, "Senha deve ter pelo menos 6 caracteres")
      .max(50, "Senha não pode ter mais de 50 caracteres")
      .regex(/[A-Z]/, "Senha deve conter pelo menos uma letra maiúscula")
      .regex(/[a-z]/, "Senha deve conter pelo menos uma letra minúscula")
      .regex(/[0-9]/, "Senha deve conter pelo menos um número")
      .regex(
        /[^A-Za-z0-9]/,
        "Senha deve conter pelo menos um caractere especial"
      ),
    confirmPassword: z.string().min(1, "Confirmação de senha é obrigatória"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Senhas não coincidem",
    path: ["confirmPassword"],
  })
  .refine(
    (data) => {
      const commonSequences = [
        "123456",
        "abcdef",
        "qwerty",
        "password",
        "senha123",
      ];
      return !commonSequences.some((seq) => data.password.includes(seq));
    },
    {
      message: "Senha muito comum ou fácil de adivinhar",
      path: ["password"],
    }
  )
  .refine(
    (data) => {
      if (data.masterConfirm) {
        return (
          data.registrationNumber && data.registrationNumber.trim().length > 0
        );
      }
      return true;
    },
    {
      message: "Número de matrícula é obrigatório para mestres",
      path: ["registrationNumber"],
    }
  );

export default function RegisterPage() {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullname: "",
      email: "",
      masterConfirm: false,
      registrationNumber: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    console.log(values);
  }

  return (
    <LayoutComponents>
      <div className="mx-auto max-w-md w-full px-4 py-12">
        <div className="space-y-6 text-center mb-8">
          <h1 className="text-3xl text-white">Crie sua conta</h1>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            {/* Nome Completo */}
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome Completo</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu nome completo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Ser Mestre */}
            <FormField
              control={form.control}
              name="masterConfirm"
              render={({ field }) => (
                <FormItem className="flex items-start space-x-3 space-y-0 rounded-md p-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <span className="flex flex-col gap-1">
                    <Label>Desejo mestrar</Label>
                    <p className="text-muted-foreground text-sm">
                      Ao selecionar esta opção, você confirma que{" "}
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        deseja emitir mesas de RPG.
                      </span>
                    </p>
                  </span>
                </FormItem>
              )}
            />

            {/* Matrícula */}
            <FormField
              control={form.control}
              name="registrationNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Número de Matrícula (Obrigatório para mestres)
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Sua matrícula" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Telefone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input placeholder="(00) 99999-9999" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Senha */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirmar Senha */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirmar Senha</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" size="lg">
              Registrar
            </Button>

            <div className="text-center text-sm text-gray-400">
              Já tem uma conta?{" "}
              <a href="/login" className="text-accent hover:underline">
                Faça login
              </a>
            </div>
          </form>
        </Form>
      </div>
    </LayoutComponents>
  );
}
