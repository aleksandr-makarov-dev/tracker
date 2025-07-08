import { Dialog } from "@/components/closed/dialog";
import { useCreateList } from "../api/create-list";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/closed/form";
import React from "react";
import { ListCreateRequestSchema, type ListCreateRequest } from "../types/list";
import { FormField } from "@/components/closed/form-field";
import { Input } from "@/components/ui/input";
import { useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { getBoardByIdQueryOptions } from "../api/get-board-by-id";

export type ListCreateDialogProps = {
  triggerButton: React.ReactNode;
  boardId: string;
};

export function ListCreateDialog({
  triggerButton,
  boardId,
}: ListCreateDialogProps) {
  const { t } = useTranslation("ListCreateDialog");

  const queryClient = useQueryClient();

  const listCreateMutation = useCreateList({
    mutationConfig: {
      onSuccess: () =>
        queryClient.invalidateQueries({
          queryKey: getBoardByIdQueryOptions(boardId).queryKey,
        }),
    },
  });

  function handleCreateList(data: ListCreateRequest) {
    listCreateMutation.mutate({ data: data });
  }

  return (
    <Dialog
      title={t("title")}
      triggerButton={triggerButton}
      submitButton={
        <Button
          type="submit"
          form="list-create-form"
          loading={listCreateMutation.isPending}
        >
          {t("add_action")}
        </Button>
      }
      cancelButtonLabel={t("cancel_action")}
      isDone={listCreateMutation.isSuccess}
    >
      <Form
        id="list-create-form"
        schema={ListCreateRequestSchema}
        onSubmit={handleCreateList}
        options={{
          defaultValues: {
            title: "",
            boardId: boardId,
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
          </React.Fragment>
        )}
      </Form>
    </Dialog>
  );
}
