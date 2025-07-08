import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export type AvatarGroupProps = {
  avatars: { image?: string; alt?: string; fallback?: string }[];
};

export function AvatarGroup({ avatars }: AvatarGroupProps) {
  return (
    <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
      {avatars.map((avatar) => (
        <Avatar className="size-5">
          <AvatarImage src={avatar.image} alt={avatar.alt} />
          <AvatarFallback>{avatar.fallback}</AvatarFallback>
        </Avatar>
      ))}
    </div>
  );
}
