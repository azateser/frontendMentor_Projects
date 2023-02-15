import * as S from "./styled";

import { Items } from "./constants";

function Sidebar({ activeStep }) {
  return (
    <S.Sidebar>
      {Items.map((item) => (
        <S.Item key={item.id} isActive={activeStep === item.id}>
          <S.ItemNumber>{item.number}</S.ItemNumber>
          <S.ItemBody>
            <S.Subtitle>{item.subtitile}</S.Subtitle>
            <S.Title>{item.title}</S.Title>
          </S.ItemBody>
        </S.Item>
      ))}
    </S.Sidebar>
  );
}

export default Sidebar;
