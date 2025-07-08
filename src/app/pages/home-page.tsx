import { Dialog } from "@/components/closed/dialog";
import { Form } from "@/components/closed/form";
import { FormField } from "@/components/closed/form-field";
import { MultiSelect } from "@/components/closed/multi-select";
import { Select } from "@/components/closed/select";
import DashboardLayout from "@/components/layouts/dashboard-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { UploadIcon } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import z from "zod";

export function HomePage() {
  const { t, i18n } = useTranslation("App");

  const schema = z.object({
    name: z.string().min(1),
    description: z.string().min(1),
    dueDate: z.string(),
    people: z.coerce.number().min(0).max(10),
    labels: z.array(z.string()),
  });

  function handleToggleLanguage() {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  }

  function handleSubmitForm(data: z.infer<typeof schema>) {
    console.log("Submitted data:", data);
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Button onClick={handleToggleLanguage}>Toogle Language</Button>
          <p>{i18n.language}</p>
          <Select
            options={[
              { label: "Вариант 1", value: "variant-1" },
              { label: "Вариант 2", value: "variant-2" },
              { label: "Вариант 3", value: "variant-3" },
            ]}
          />
          <Input placeholder="Поиск по задачам" />
          <Input placeholder="Search" variant="soft" />
          <MultiSelect
            label="Выберите приоритет"
            options={[
              { label: "Низкий", value: "variant-1" },
              { label: "Средний", value: "variant-2" },
              { label: "Высокий", value: "variant-3" },
            ]}
          />
          <Checkbox />
        </div>
        <div className="flex flex-row gap-2">
          <Button variant="soft" color="blue">
            {t("action_button")}
          </Button>
          <Dialog
            title="Создание новой задачи"
            description="Заполните все необходимые поля для создания задачи"
            triggerButton={
              <Button variant="soft" color="green">
                Открыть диалог
              </Button>
            }
            submitButton={
              <Button
                variant="solid"
                color="blue"
                type="submit"
                form="task-create-form"
              >
                Создать задачу
              </Button>
            }
            cancelButtonLabel="Отмена"
          >
            <Form
              id="task-create-form"
              schema={schema}
              onSubmit={handleSubmitForm}
              options={{
                defaultValues: {
                  name: "",
                  description: "",
                  dueDate: "",
                  people: 0,
                  labels: ["frontend", "embedded"],
                },
              }}
            >
              {({ control }) => (
                <React.Fragment>
                  <FormField
                    label="Название"
                    control={control}
                    name="name"
                    render={(field) => <Input {...field} />}
                  />
                  <FormField
                    label="Описание"
                    control={control}
                    name="description"
                    render={(field) => <Input variant="soft" {...field} />}
                  />
                  <FormField
                    label="Дата сдачи"
                    control={control}
                    name="dueDate"
                    render={(field) => (
                      <Input
                        className="w-min"
                        type="datetime-local"
                        {...field}
                      />
                    )}
                  />
                  <FormField
                    label="Количество человек"
                    control={control}
                    name="people"
                    render={(field) => <Input type="number" {...field} />}
                  />
                  <FormField
                    label="Метки"
                    control={control}
                    name="labels"
                    render={(field) => (
                      <MultiSelect
                        options={[
                          { label: "Фонтенд", value: "frontend" },
                          { label: "Бэкенд", value: "backend" },
                          { label: "Тестирование", value: "testing" },
                          { label: "Мобайл", value: "mobile" },
                          {
                            label: "Встроенное программирование",
                            value: "embedded",
                          },
                        ]}
                        label="Выберите метки"
                        {...field}
                      />
                    )}
                  />
                </React.Fragment>
              )}
            </Form>
          </Dialog>
          <Button
            variant="soft"
            color="orange"
            loading
            loadingText="Загружаю..."
          >
            Начать загрузку
          </Button>
          <Button variant="soft" color="red">
            Начать загрузку
          </Button>
          <Button variant="soft" color="gray">
            Начать загрузку
          </Button>
        </div>
        <div className="flex flex-row gap-2">
          <Button
            variant="solid"
            color="blue"
            loading
            loadingText="Загружаю..."
          >
            Начать загрузку
          </Button>
          <Button variant="solid" color="green">
            Начать загрузку
          </Button>
          <Button variant="solid" color="orange">
            Начать загрузку
          </Button>
          <Button variant="solid" color="red">
            Начать загрузку
          </Button>
          <Button variant="solid" color="gray">
            Начать загрузку
          </Button>
        </div>
        <div className="flex flex-row gap-2">
          <Button variant="ghost" color="blue">
            Начать загрузку
          </Button>
          <Button variant="ghost" color="green">
            Начать загрузку
          </Button>
          <Button variant="ghost" color="orange">
            Начать загрузку
          </Button>
          <Button variant="ghost" color="red">
            Начать загрузку
          </Button>
          <Button variant="ghost" color="gray">
            <UploadIcon /> Начать загрузку
          </Button>
        </div>
        <div className="flex flex-row gap-2">
          <Badge variant="soft" color="blue">
            {t("action_button")}
          </Badge>
          <Badge variant="soft" color="gray">
            {t("action_button")}
          </Badge>
          <Badge variant="soft" color="orange">
            {t("action_button")}
          </Badge>
          <Badge variant="soft" color="green">
            {t("action_button")}
          </Badge>
          <Badge variant="soft" color="red">
            {t("action_button")}
          </Badge>
        </div>
        <div className="flex flex-row gap-2">
          <Badge variant="solid" color="blue">
            {t("action_button")}
          </Badge>
          <Badge variant="solid" color="gray">
            {t("action_button")}
          </Badge>
          <Badge variant="solid" color="orange">
            {t("action_button")}
          </Badge>
          <Badge variant="solid" color="green">
            {t("action_button")}
          </Badge>
          <Badge variant="solid" color="red">
            {t("action_button")}
          </Badge>
        </div>
        <div className="h-[500px] bg-red-100"></div>
      </div>
    </DashboardLayout>
  );
}
