"use client";
import Button from "@/components/Button";
import useSubscribeModal from "@/hooks/useSubscribeModal";
import { useUser } from "@/hooks/useUser";
import { postData } from "@/libs/helpers";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AccountContent = () => {
  const router = useRouter();
  const subsribeModal = useSubscribeModal();
  const { isLoading, subscription, user } = useUser();
  const [Loading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [isLoading, user, router]);

  const redirectToCustomerPortal = async () => {
    setIsLoading(true);
    try {
      const { url, error } = await postData({
        url: "/api/create-portal-link",
      });
      window.location.assign(url);
    } catch (error) {
      toast.error((error as Error).message);
    }
    setIsLoading(false);
  };

  return (
    <div className="mb-7 px-6">
      {!subscription && (
        <div className="flex flex-col gap-y-4">
          <p>No Active Plan.</p>
          <Button onClick={subsribeModal.onOpen} className="w-[300px">
            Subscribe
          </Button>
        </div>
      )}
      {subscription && (
        <div className="flex flex-col gap-y-4">
          <p>
            You are currently on the
            <b>{subscription?.prices?.products?.name}</b>
          </p>
          <Button
            onClick={redirectToCustomerPortal}
            disabled={Loading || isLoading}
            className="w-[300px"
          >
            Open Customer Portal
          </Button>
        </div>
      )}
    </div>
  );
};

export default AccountContent;
