// frontend\src\components\plan-form.jsx
import { Button } from "./ui/button";
import { Field, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";

export default function produtoForm({
  editing,
  sheetOpen,
  setSheetOpen,
  form,
  setForm,
  error,
  saving,
  handleSubmit,
}) {
  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{editing ? "Editar Produto" : "Novo Produto"}</SheetTitle>
          <SheetDescription>
            {editing
              ? "Altere os dados do produto."
              : "Preencha os dados para criar um novo produto."}
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6 px-4">
          <FieldGroup>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Field>
              <FieldLabel htmlFor="produto-name">Nome do Produto</FieldLabel>
              <Input
                id="produto-name"
                placeholder="Ex: Pro"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="produto-price">Preço (R$)</FieldLabel>
              <Input
                id="produto-price"
                type="number"
                step="0.01"
                min="0"
                placeholder="0.00"
                required
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="produto-maxlinks">Máximo de Links</FieldLabel>
              <Input
                id="produto-maxlinks"
                type="number"
                min="1"
                placeholder="10"
                required
                value={form.maxLinks}
                onChange={(e) => setForm({ ...form, maxLinks: e.target.value })}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="produto-maxclicks">
                Máximo de Cliques/mês
              </FieldLabel>
              <Input
                id="produto-maxclicks"
                type="number"
                min="1"
                placeholder="1000"
                required
                value={form.maxClicks}
                onChange={(e) =>
                  setForm({ ...form, maxClicks: e.target.value })
                }
              />
            </Field>
            <Field className="mt-4">
              <Button type="submit" disabled={saving}>
                {saving
                  ? "Salvando..."
                  : editing
                    ? "Salvar Alterações"
                    : "Criar Produto"}
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </SheetContent>
    </Sheet>
  );
}

