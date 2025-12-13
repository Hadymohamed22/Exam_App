import { CustomButton } from "@/components/shared/custom-button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { TriangleAlert } from "lucide-react";
import { deleteAccount } from "../_action/delete-account";
import { DeleteAPIResponse } from "../_types/account-settings";
import { toast } from "sonner";
import { signOut } from "next-auth/react";

export default function DeleteConfirmBox() {
  return (
    <AlertDialog>

      {/* Trigger */}
      <AlertDialogTrigger asChild>
        <CustomButton type="button" variant={"halfDestructive"}>
          Delete My Account
        </CustomButton>
      </AlertDialogTrigger>

      {/* Content */}
      <AlertDialogContent>

        {/* Header */}
        <AlertDialogHeader>

          {/* Title */}
          <AlertDialogTitle className="flex flex-col">
            <div className="error-icon mx-auto text-red-600 flex justify-center items-center size-24 md:size-28 relative before:absolute before:w-3/4 before:h-3/4 before:rounded-full before:bg-red-100 after:absolute after:w-full after:h-full after:bg-red-50 after:rounded-full before:z-20 after:z-10 mb-7">
              <TriangleAlert className="size-10 md:size-12 z-50" />
            </div>
            <p className="text-base md:text-lg font-medium text-red-600 text-center mb-0">
              Are you sure you want to delete your account?
            </p>
          </AlertDialogTitle>

          {/* Description */}
          <AlertDialogDescription className="text-center mt-2.5 text-xs md:text-sm text-gray-500 m-0">
            This action is permanent and cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>

        {/* Footer */}
        <AlertDialogFooter className="flex flex-col md:flex-row mt-8 md:mt-12 p-6">

          {/* Cancel Button */}
          <AlertDialogCancel className="bg-gray-200 text-gray-800 hover:bg-gray-300 rounded-none flex-grow min-h-11 m-0">
            Cancel
          </AlertDialogCancel>

          {/* Delete Button */}
          <AlertDialogAction
            className="bg-red-600 hover:bg-red-700 text-white rounded-none flex-grow min-h-11"
            type="submit"
            onClick={async () => {
              const payload: DeleteAPIResponse = await deleteAccount();
              if ("code" in payload) {
                toast.error(payload.message || "Failed to delete your account");
                return;
              }
              toast.success("Deleted Successfully , Good Bye");
              signOut();
            }}
          >
            yes, delete it
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
