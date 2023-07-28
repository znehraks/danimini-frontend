import React, { useCallback, useState } from "react";
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
      queryClient.invalidateQueries(["feeds"]);
    },
    onError: () => {},
    onSettled: () => {},
  });
  const [value, setValue] = useState("");
  const handleOnKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        if (!!value && value.trim() !== "") {
          mutate({ comment_content: value, feed_id });
          setValue("");
        }
      }
    },
    [feed_id, mutate, value]
  );
  return (
    <Input
      onKeyDown={handleOnKeyDown}
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
