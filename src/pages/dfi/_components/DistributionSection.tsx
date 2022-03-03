import classNames from 'classnames'
import { Container } from '@components/commons/Container'

export function DistributionSection (): JSX.Element {
  return (
    <section className='py-20'>
      <Container>
        <div className='flex flex-col w-full md:w-1/3 lg:w-1/2 mb-16 space-y-10'>
          <h1 className='font-medium text-2xl md:text-5xl' data-testid='DistributionSection.Heading'>Initial Token Distribution</h1>
          <div className='text-xl md:text-2xl' data-testid='DistributionSection.Text'>
            Of the 1.2 billion $DFI coins, 49% will be in the initial supply, with the rest issued to masternode holders over time.
          </div>
        </div>
        <div className='mx-auto w-full md:w-3/5 space-y-16' data-testid='DistributionSection.Chart'>
          <Chart
            labelA='Initial supply'
            labelB='To masternodes over time'
          />
          <div>
            Of the initial supply, 49% will be kept by the DeFiChain Foundation. The rest may be distributed to external partners, to fund the initial development.
          </div>
          <Chart
            labelA='DeFiChain Foundation'
            labelB='External partners'
            fill
          />
        </div>
      </Container>
    </section>
  )
}

function Chart (props: {fill?: boolean, labelA: string, labelB: string}): JSX.Element {
  return (
    <>
      <div className='w-full h-[32px] relative'>
        <div className='w-full h-8 relative text-gray-500 text-2xl leading-[2.4rem]'>
          <div className='w-[49%] left-0 absolute flex justify-center items-center'>
            <span className='inline-block px-2 bg-white relative z-[1000]'>49%</span>
            <span className='block h-[1px] w-[calc(100%_-_2px)] bg-gray-500 absolute top-[12px] left-[1px]' />
            <span className='block w-[1px] h-[16px] bg-gray-500 absolute top-[4px] left-0' />
            <span className='block w-[1px] h-[16px] bg-gray-500 absolute top-[4px] right-0' />
          </div>
          <div className='w-[51%] left-[49%] absolute flex justify-center items-center'>
            <span className='inline-block px-2 bg-white relative z-[1000]'>51%</span>
            <span className='block h-[1px] w-[calc(100%_-_2px)] bg-gray-500 absolute top-[12px] left-[1px]' />
            <span className='block w-[1px] h-[16px] bg-gray-500 absolute top-[4px] left-0' />
            <span className='block w-[1px] h-[16px] bg-gray-500 absolute top-[4px] right-0' />
          </div>
        </div>
      </div>
      <div className={classNames('w-full h-[69px] relative leading-[2.4rem]', { 'divide-x': props.fill })}>
        <div className='w-[49%] h-full absolute left-0 flex items-center justify-center rounded-tl rounded-bl bg-primary-500 text-white'>
          {props.labelA}
        </div>
        <div className={classNames('w-[51%] h-full left-[49%] absolute flex justify-center items-center rounded-bl rounded-br ', props.fill !== undefined ? 'bg-primary-500 text-white' : 'bg-gray-200 text-black ')}>
          {props.labelB}
        </div>
      </div>
    </>
  )
}