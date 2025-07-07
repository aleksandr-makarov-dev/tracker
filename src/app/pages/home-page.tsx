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
  });

  function handleToggleLanguage() {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  }

  function handleSubmitForm(data: z.infer<typeof schema>) {
    console.log("Submitted data:", data);
  }

  return (
    <DashboardLayout>
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
          placeholder="Не выбрано"
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
        <Button variant="soft" color="primary">
          {t("action_button")}
        </Button>
        <Dialog
          title="Создание новой задачи"
          description="Заполните все необходимые поля для создания задачи"
          triggerButton={
            <Button variant="soft" color="success">
              Открыть диалог
            </Button>
          }
          submitButton={
            <Button
              variant="solid"
              color="primary"
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
                    <Input className="w-min" type="datetime-local" {...field} />
                  )}
                />
              </React.Fragment>
            )}
          </Form>
        </Dialog>
        <Button
          variant="soft"
          color="warning"
          loading
          loadingText="Загружаю..."
        >
          Начать загрузку
        </Button>
        <Button variant="soft" color="danger">
          Начать загрузку
        </Button>
        <Button variant="soft" color="muted">
          Начать загрузку
        </Button>
      </div>
      <div className="flex flex-row gap-2">
        <Button
          variant="solid"
          color="primary"
          loading
          loadingText="Загружаю..."
        >
          Начать загрузку
        </Button>
        <Button variant="solid" color="success">
          Начать загрузку
        </Button>
        <Button variant="solid" color="warning">
          Начать загрузку
        </Button>
        <Button variant="solid" color="danger">
          Начать загрузку
        </Button>
        <Button variant="solid" color="muted">
          Начать загрузку
        </Button>
      </div>
      <div className="flex flex-row gap-2">
        <Button variant="ghost" color="primary">
          Начать загрузку
        </Button>
        <Button variant="ghost" color="success">
          Начать загрузку
        </Button>
        <Button variant="ghost" color="warning">
          Начать загрузку
        </Button>
        <Button variant="ghost" color="danger">
          Начать загрузку
        </Button>
        <Button variant="ghost" color="muted">
          <UploadIcon /> Начать загрузку
        </Button>
      </div>
      <div className="flex flex-row gap-2">
        <Badge variant="soft" color="primary">
          {t("action_button")}
        </Badge>
        <Badge variant="soft" color="muted">
          {t("action_button")}
        </Badge>
        <Badge variant="soft" color="warning">
          {t("action_button")}
        </Badge>
        <Badge variant="soft" color="success">
          {t("action_button")}
        </Badge>
        <Badge variant="soft" color="danger">
          {t("action_button")}
        </Badge>
      </div>
      <div className="flex flex-row gap-2">
        <Badge variant="solid" color="primary">
          {t("action_button")}
        </Badge>
        <Badge variant="solid" color="muted">
          {t("action_button")}
        </Badge>
        <Badge variant="solid" color="warning">
          {t("action_button")}
        </Badge>
        <Badge variant="solid" color="success">
          {t("action_button")}
        </Badge>
        <Badge variant="solid" color="danger">
          {t("action_button")}
        </Badge>
      </div>
    </DashboardLayout>
  );
}
