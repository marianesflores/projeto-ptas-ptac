import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function SignupForm({
  ...props
}) {
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Crie sua conta</CardTitle>
        <CardDescription>
          Coloque suas informações abaixo para criar sua conta
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Nome Completo</FieldLabel>
              <Input id="name" type="text" placeholder="Mariazinha" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input id="email" type="email" placeholder="mariazinha@example.com" required />
              <FieldDescription>
                Não compartilharemos seu email com ninguém!
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Senha</FieldLabel>
              <Input id="password" type="password" required />
              <FieldDescription>
                precisamos de uma senha forte para manter sua conta segura. Use pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e símbolos.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="confirm-password">
                Confirme sua senha
              </FieldLabel>
              <Input id="confirm-password" type="password" required />
              <FieldDescription>Por favor, confirme sua senha.</FieldDescription>
            </Field>
            <FieldGroup>
              <Field>
                <Button type="submit" className="bg-red-900 text-yellow-200">Crie uma conta</Button>
                <FieldDescription className="px-6 text-center">
                  Já tem uma conta? <a href="/login">login</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
