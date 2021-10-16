import React, { memo } from "react";
import styled from "styled-components";

import { PrimaryButton } from "../buttons/PrimaryButton";
import { Input } from "../input/Input";

export const SearchInput = memo(() => {
  console.log("SearchInput");
  return (
    <div>
      <SContainer>
        <Input placeholder="検索条件を入力" />
        <SButtonWrapper>
          <PrimaryButton>検索</PrimaryButton>
        </SButtonWrapper>
      </SContainer>
    </div>
  );
});

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
