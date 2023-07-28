import React, { useState } from "react";
import { Input as AntInput } from "antd";
import styled from "@emotion/styled";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createComment } from "@/api";

type TFeedCardCommentContentInputProps = { feed_id: string };
export function FeedCardCommentContentInput({
  feed_id,
}: TFeedCardCommentContentInputProps) {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(["createComment"], createComment, {
    onSuccess: () => {
      console.log("success??");
      queryClient.invalidateQueries(["feeds"]);
    },
    onError: () => {
      console.log("error");
    },
    onSettled: () => {
      console.log("settled");
    },
  });
  const [value, setValue] = useState("");
  return (
    <Input
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          mutate({ comment_content: value, feed_id });
          setValue("");
        }
      }}
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
      bordered={false}
      placeholder="댓글 달기..."
    />
  );
}

const Input = styled(AntInput)`
  padding: 0;
  font-size: 0.8rem;
`;
