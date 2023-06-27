"use client";

import config from "@/sanity.config";
import { NextStudio } from "next-sanity/studio";
import ProtectedRoute from "@/components/ProtectedRoute";

const StudioPage = () => {
  //  Supports the same props as `import {Studio} from 'sanity'`, `config` is required
  return (
    <ProtectedRoute>
      <NextStudio config={config} />
    </ProtectedRoute>
  );
};
export default StudioPage;
