import { useLdo, useResource, useSolidAuth, useSubject } from "@ldo/solid-react";
import { FunctionComponent } from "react";
import { FoafProfileShapeType } from "./.ldo/foafProfile.shapeTypes"

export const Profile: FunctionComponent = () => {
  const { session } = useSolidAuth();
  const webIdResource = useResource(session.webId);
  const profile = useSubject(FoafProfileShapeType, session.webId);
  const { changeData, commitData } = useLdo();  

  if (webIdResource?.isLoading()) {
    return <p>Loading...</p>
  }

  return <div>
    <p>Hello! Welcome {profile?.name}.</p>
    <input value={profile?.name} onChange={async (e) => {
      if (!profile || !webIdResource) return;
      const cProfile = changeData(profile, webIdResource);
      cProfile.name = e.target.value;
      await commitData(cProfile);
    }} />
  </div>
}
