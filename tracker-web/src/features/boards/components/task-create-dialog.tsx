import { Dialog } from "@/components/closed/dialog";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useCreateTask } from "../api/create-task";
import { getTasksByBoardIdQueryOptions } from "../api/get-tasks-by-board-id";
import { useQueryClient } from "@tanstack/react-query";
import { Form } from "@/components/closed/form";
import React from "react";
import { TaskCreateRequestSchema, type TaskCreateRequest } from "../types/task";
import { FormField } from "@/components/closed/form-field";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/closed/select";

export type TaskCreateDialogProps = {
  triggerButton: React.ReactNode;
  listId: string;
  boardId: string;
};

export function TaskCreateDialog({
  triggerButton,
  boardId,
  listId,
}: TaskCreateDialogProps) {
  const { t } = useTranslation("TaskCreateDialog");

  const queryClient = useQueryClient();

  const taskCreateMutation = useCreateTask({
    mutationConfig: {
      onSuccess: () =>
        queryClient.invalidateQueries({
          queryKey: getTasksByBoardIdQueryOptions(boardId).queryKey,
        }),
    },
  });

  function handleCreateTask(data: TaskCreateRequest) {
    taskCreateMutation.mutate({ data: data });
  }

  return (
    <Dialog
      title={t("title")}
      triggerButton={triggerButton}
      submitButton={
        <Button
          type="submit"
          form="task-create-form"
          loading={taskCreateMutation.isPending}
        >
          {t("add_action")}
        </Button>
      }
      cancelButtonLabel={t("cancel_action")}
      isDone={taskCreateMutation.isSuccess}
    >
      <Form
        id="task-create-form"
        schema={TaskCreateRequestSchema}
        onSubmit={handleCreateTask}
        options={{
          defaultValues: {
            title: "",
            priority: "",
            dueDate: "",
            listId: String(listId),
          },
        }}
      >
        {({ control }) => (
          <React.Fragment>
            <FormField
              control={control}
              name="title"
              label={t("form_label_title")}
              render={(field) => <Input {...field} />}
            />
            <FormField
              control={control}
              name="priority"
              label={t("form_label_priority")}
              render={(field) => (
                <Select
                  className="w-full"
                  placeholder={t("form_priority_placeholder")}
                  options={[
                    {
                      label: t("form_priority_option_low"),
                      value: "LOW",
                    },
                    {
                      label: t("form_priority_option_medium"),
                      value: "MEDIUM",
                    },
                    {
                      label: t("form_priority_option_high"),
                      value: "HIGH",
                    },
                    {
                      label: t("form_priority_option_critical"),
                      value: "CRITICAL",
                    },
                  ]}
                  {...field}
                />
              )}
            />
            <FormField
              control={control}
              name="dueDate"
              label={t("form_label_due_date")}
              render={(field) => (
                <Input className="w-min" type="datetime-local" {...field} />
              )}
            />
          </React.Fragment>
        )}
      </Form>
    </Dialog>
  );
}
