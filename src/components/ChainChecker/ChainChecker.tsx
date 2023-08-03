'use client'

import { useNetwork, useSwitchNetwork } from 'wagmi'
import { Button } from '../Button/Button'
import { ChainSwitch } from '../icons/ChainSwitch'
import { l2 } from '@/config/chain'
import { useIsMisMatched } from '@/utils/useIsMismatched'

export const ChainChecker: React.FC = () => {
  const { chain } = useNetwork()
  const { switchNetwork } =
  useSwitchNetwork()
  const isMismatched = useIsMisMatched();

  return (
    <>
      {isMismatched && (
        <div className="flex flex-col md:flex-row relative top-16 md:top-auto justify-between items-center md:gap-4 px-6 md:px-8 py-4 bg-[#EFEFEF] rounded-3xl md:rounded-[2.5rem] w-full mx-6 md:mx-16 shadow-large">
          <div className="basis-[2/3]">
            <h2 className="font-medium text-sm md:text-base font-sans">
              Network unsupported
            </h2>
            <span className="text-sm md:text-base text-[#444444] font-sans">
              You’re currently on an unsupported network — {chain?.name}. Please
              switch to the Base network.
            </span>
          </div>
          <div className="w-full md:w-auto md:basis-[1/3] flex justify-end">
            <Button
              variant="LIGHT"
              disabled={!switchNetwork}
              onClick={() => switchNetwork!(l2.id)}
              className="mt-4 md:mt-0 basis-full md:basis-1/2 text-sm md:text-base !flex !justify-start md:!justify-between !bg-transparent !py-3"
            >
              Switch to Base
              <ChainSwitch />
            </Button>
          </div>
        </div>
      )}
    </>
  )
}