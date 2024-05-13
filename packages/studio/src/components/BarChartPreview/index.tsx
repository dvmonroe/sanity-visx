import React, {useState, useEffect} from 'react'
import {Card} from '@sanity/ui'
import {UserViewComponent} from 'sanity/structure'
import {BarChart} from '@sanity-visx/ui'
import {SanityClient} from '@sanity/client'
import {useClient} from 'sanity'

const fetchFileUrl = async (id: string, client: SanityClient): Promise<any> => {
  return client.fetch(`*[_id == '${id}'][0].url`)
}

export const BarChartPreview: UserViewComponent = ({document}) => {
  const {displayed: { background, bars, file, xAxis, yAxis, leftMargin, rightMargin }}: any = document
  const [fileUrl, setFileUrl] = useState<any | null>()
  const client: SanityClient = useClient({apiVersion: '2022-09-01'})

  useEffect(() => {
    const assetRef = file?.asset?._ref;
    if (assetRef) {
      fetchFileUrl(assetRef, client).then((result) => {
        setFileUrl(result)
      })
    }
  }, [file])

  /** TODO: Style empty state **/
  if (!file) {
    return <Card></Card>
  }

  const { gradientTop, gradientBottom} = background || {};
  const { color } = bars || {};

  const backgroundProps = {
    ...background,
    gradient: {
      from: gradientTop?.hex,
      to: gradientBottom?.hex,
    },
  };

  const barsProps = {
    ...bars,
    color: color?.hex,
  };

  const xAxisProps = {
    ...xAxis,
    axisColor: xAxis.axisColor?.hex,
    labelColor: xAxis.labelColor?.hex,
    tickLabelColor: xAxis.tickLabelColor?.hex,
    tickStrokeColor: xAxis.tickStrokeColor?.hex,
  };

  const yAxisProps = {
    ...yAxis,
    axisColor: yAxis.axisColor?.hex,
    labelColor: yAxis.labelColor?.hex,
    tickLabelColor: yAxis.tickLabelColor?.hex,
    tickStrokeColor: yAxis.tickStrokeColor?.hex,
  };

  return (
    <Card padding={2}>
      <BarChart
        width={500}
        height={400}
        csvFileUrl={fileUrl}
        leftMargin={leftMargin}
        rightMargin={rightMargin}
        background={backgroundProps}
        bars={barsProps}
        xAxis={xAxisProps}
        yAxis={yAxis}
      />
    </Card>
  )
}
