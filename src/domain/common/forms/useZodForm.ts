import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import type { ZodSchema } from "zod";

export function useZodForm<T extends Record<string, unknown>>(
  schema: ZodSchema<T>,
  initialValues?: Partial<T>
) {
  const form = useForm<T>({
    validationSchema: toTypedSchema(schema),
    initialValues: initialValues as any,
  });
  return form;
}
