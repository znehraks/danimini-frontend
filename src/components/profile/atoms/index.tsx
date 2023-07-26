import { ProfileAvatar } from "./ProfileAvatar";
import { ProfileButton } from "./ProfileButton";
import { ProfileFeedCardLayout } from "./ProfileFeedCardLayout";
import { ProfileInfoLayout } from "./ProfileInfoLayout";
import { ProfileTab } from "./ProfileTab";
import { ProfileTopRow } from "./ProfileTopRow";
import { ProfileTopLayout } from "./ProfileTopLayout";
import { ProfileFeedCard } from "./ProfileFeedCard";
import { ProfileDetailModal } from "./ProfileDetailModal";
import { ProfileDetailModalImage } from "./ProfileDetailModalImage";
import { ProfileDetailModalContent } from "./ProfileDetailModalContent";
import { ProfileTodoCard } from "./ProfileTodoCard";

export const ProfileAtom = {
  Avatar: ProfileAvatar,
  Button: ProfileButton,
  FeedCardLayout: ProfileFeedCardLayout,
  FeedCard: ProfileFeedCard,
  TodoCard: ProfileTodoCard,
  InfoLayout: ProfileInfoLayout,
  Tab: ProfileTab,
  TopLayout: ProfileTopLayout,
  TopRow: ProfileTopRow,
  DetailModal: ProfileDetailModal,
  ModalImage: ProfileDetailModalImage,
  ModalContent: ProfileDetailModalContent,
};
